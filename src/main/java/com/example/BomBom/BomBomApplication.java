package com.example.BomBom;

import com.example.BomBom.config.MyBatisConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.RequestMapping;

@Import(MyBatisConfig.class)
@SpringBootApplication(scanBasePackages = "com.example.BomBom.web")
public class BomBomApplication {
	public static void main(String[] args) {

		SpringApplication.run(BomBomApplication.class, args);
	}

}
