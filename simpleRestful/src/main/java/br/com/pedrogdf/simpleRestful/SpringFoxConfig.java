package br.com.pedrogdf.simpleRestful;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * SpringFox configuration to generate automatically the swagger of the API
 * @author pedro
 *
 */
@Configuration
@EnableSwagger2
public class SpringFoxConfig {
	
	 	@Bean
		public Docket api() {
			return new Docket(DocumentationType.OAS_30)
					.select()
					//Restrict the SpringFox Swagger generator to only package "br.com.pedrogdf.simpleRestful.service"
					.apis(RequestHandlerSelectors.basePackage("br.com.pedrogdf.simpleRestful.service"))
					.paths(PathSelectors.any())
					.build();
		}
}
