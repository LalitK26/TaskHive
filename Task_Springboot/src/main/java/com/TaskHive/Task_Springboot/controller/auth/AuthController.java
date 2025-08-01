package com.TaskHive.Task_Springboot.controller.auth;


import com.TaskHive.Task_Springboot.dto.SignupRequest;
import com.TaskHive.Task_Springboot.dto.UserDto;
import com.TaskHive.Task_Springboot.services.auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")

    public ResponseEntity<?>  signupUser(@RequestBody SignupRequest signupRequest){
        if(authService.hasUserWithEmail(signupRequest.getEmail()))
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("user already exists with this email.");

        UserDto createdUserDto= authService.signupUser(signupRequest);
            if(createdUserDto ==null)
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("user not created");
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUserDto);
    }
}
