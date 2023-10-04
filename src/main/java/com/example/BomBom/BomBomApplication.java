package com.example.BomBom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class BomBomApplication {
	public static void main(String[] args) {

		SpringApplication.run(BomBomApplication.class, args);
	}

}
