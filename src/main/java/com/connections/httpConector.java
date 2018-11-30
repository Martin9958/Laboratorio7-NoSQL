package com.connections;

import com.exceptions.bolsaException;
import org.springframework.stereotype.Service;

import java.io.IOException;


public interface httpConector {
    public StringBuffer dataconnector (String fuction, String symbol) throws bolsaException, IOException;
}
