package org.generation.todolist.service;

import org.generation.todolist.repository.entity.Todo;

import java.util.ArrayList;

public interface TodoService {

    Todo save(Todo todo);

    void delete(int todoId);

    ArrayList<Todo> all();

    Todo findById(int todoId);

}
