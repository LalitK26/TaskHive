package com.TaskHive.Task_Springboot.repositories;

import com.TaskHive.Task_Springboot.entities.User;
import com.TaskHive.Task_Springboot.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;
/**user repository where the user is to be found by the email form the database*/

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByEmail(String username);

    Optional<User> findByUserRole(UserRole userRole);
}
