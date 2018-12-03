package com.controller;

import com.services.bolsaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController()
@RequestMapping(value = "/BolsaAPI")
public class bolsaController {

    @Autowired
    bolsaService bolsaService;

    @GetMapping("/{function}/{symbol}")
    public StringBuffer getBolsaInfo(@PathVariable("function") String function, @PathVariable("symbol") String symbol){
        System.out.println(function);
        System.out.println(symbol);
        return bolsaService.bolsadata(function,symbol);
    }
}
