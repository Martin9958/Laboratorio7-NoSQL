package com.services;

import com.connections.httpConector;
import com.exceptions.bolsaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class bolsaServiceImpl implements bolsaService {

    @Autowired
    httpConector conexion;


    @Override
    public StringBuffer bolsadata(String function, String symbol) {
        StringBuffer bolsa = null;
        try {
            bolsa = conexion.dataconnector(function,symbol);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (bolsaException ex) {
            ex.printStackTrace();
        }
        return bolsa;
    }
}
