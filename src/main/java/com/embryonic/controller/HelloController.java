package com.embryonic.controller;

import co.paralleluniverse.fibers.Fiber;
import co.paralleluniverse.fibers.SuspendExecution;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() throws SuspendExecution, InterruptedException {

        Fiber.sleep(2000);
        return "Hello from a fiber";
    }

    @GetMapping("/hello1")
    public String sayHello1() throws InterruptedException {
        Thread.sleep(2000);
        return "Hello from a thread";
    }

    @GetMapping("/ping")
    public String ping(){
        return "ping";
    }

}
