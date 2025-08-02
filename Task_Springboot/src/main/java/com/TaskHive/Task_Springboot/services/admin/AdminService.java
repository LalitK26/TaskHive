package com.TaskHive.Task_Springboot.services.admin;

import com.TaskHive.Task_Springboot.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();

}
