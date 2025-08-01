package com.TaskHive.Task_Springboot.dto;

import com.TaskHive.Task_Springboot.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private long id;

    private String name;

    private String email;

    private String password;

    private UserRole userRole;
}
