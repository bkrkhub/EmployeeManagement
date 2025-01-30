package com.bkrk.employee.service;

import com.bkrk.employee.entity.Employee;
import com.bkrk.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(Long id) {
        if(!employeeRepository.existsById(id)) {
            throw new EntityNotFoundException("Employee with ID " + id + " not found");
        }
        employeeRepository.deleteById(id);
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee targetEmployee = optionalEmployee.get();

            targetEmployee.setEmail(employee.getEmail());
            targetEmployee.setName(employee.getName());
            targetEmployee.setPhone(employee.getPhone());
            targetEmployee.setDepartment(employee.getDepartment());

            return employeeRepository.save(targetEmployee);
        }
        return null;
    }
}
