package com.example.BomBom;

import com.example.BomBom.Service.MemberService;
import com.example.BomBom.config.MyBatisConfig;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.RequestMapping;

@Import(MyBatisConfig.class)
@SpringBootApplication(scanBasePackages = "com.example.BomBom.web")
public class BomBomApplication implements ApplicationRunner {

	private final MemberService memberService;

	public BomBomApplication(MemberService memberService) {
		this.memberService = memberService;
	}

	public static void main(String[] args) {
		SpringApplication.run(BomBomApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		memberService.EndUpdatedevice();
	}
}