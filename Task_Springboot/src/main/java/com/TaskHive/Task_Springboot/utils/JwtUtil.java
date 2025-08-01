package com.TaskHive.Task_Springboot.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {
    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    private String generateToken(Map<String,Object> extraClaims, UserDetails userDetails) {
        return Jwts.builder().setClaims(extraClaims).setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() +1000 *60 * 24))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSigningKey() {
        byte[] keyBytes= Decoders.BASE64.decode("dfac65fce6e97a43a217d663ae4639f2c8fbc77601990140f636c87d71b6aef2");
        return Keys.hmacShaKeyFor(keyBytes);
    }

    /** this method will return a boolean value whether the token is valid or not*/
    public boolean isTokenValid(String token, UserDetails userDetails){
        final String userName=extractUserName(token);
        return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }
    /** extract username method is called to extract or get username*/
    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    /**the below three methods are used to extract the information from the token */

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }


    private <T> T extractClaim(String token, Function<Claims, T> claimsResolvers) {
        final Claims claims=extractAllClaims(token);
        return claimsResolvers.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token)
                .getBody();
    }


}
