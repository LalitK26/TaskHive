package com.TaskHive.Task_Springboot.services.admin;

import com.TaskHive.Task_Springboot.dto.UserDto;
import com.TaskHive.Task_Springboot.entities.User;
import com.TaskHive.Task_Springboot.enums.UserRole;
import com.TaskHive.Task_Springboot.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;

    @Override
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().filter(user -> user.getUserRole()== UserRole.EMPLOYEE)
                .map(User::getUserDto)
                .collect(Collectors.toList());
    }
}
