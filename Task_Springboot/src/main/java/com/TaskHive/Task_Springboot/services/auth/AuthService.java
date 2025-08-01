package com.TaskHive.Task_Springboot.services.auth;

import com.TaskHive.Task_Springboot.dto.SignupRequest;
import com.TaskHive.Task_Springboot.dto.UserDto;

public interface AuthService {

    UserDto signupUser(SignupRequest signupRequest);

    boolean hasUserWithEmail(String email);
}
