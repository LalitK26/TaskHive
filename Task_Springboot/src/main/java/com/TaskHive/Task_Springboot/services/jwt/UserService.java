package com.TaskHive.Task_Springboot.services.jwt;

import org.springframework.security.core.userdetails.UserDetailsService;
/**User service interface where userDetailService() is created and implemented in in userserviceimpl class*/
public interface UserService {

    UserDetailsService userDetailService();
}
