package org.generation.todolist.controller;

import org.generation.todolist.controller.dto.TodoDTO;
import org.generation.todolist.repository.entity.Todo;
import org.generation.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController( @Autowired TodoService todoService )
    {
        this.todoService = todoService;
    }

    // Display all
    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Todo> getTodos() { return todoService.all(); }

    // Get by Id
    @CrossOrigin
    @GetMapping( "/{id}" )
    public Todo findTodoById( @PathVariable Integer id )
    {
        return todoService.findById( id );
    }

    // To Delete
    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id ) { todoService.delete( id );}

    // Set up post mapping and request
    @CrossOrigin
    @PostMapping( "/add" )
    public void save(@RequestParam(name="title", required = true) String title,
                     @RequestParam(name="description", required = false) String description,
                     @RequestParam(name="date", required = true) LocalDate date)
    {
        TodoDTO todoDTO = new TodoDTO(title, description, date);
        todoService.save(new Todo(todoDTO));
    }

}
