package com.TaskHive.Task_Springboot.dto;

import com.TaskHive.Task_Springboot.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;

    private long userId;

    private UserRole userRole;

}
