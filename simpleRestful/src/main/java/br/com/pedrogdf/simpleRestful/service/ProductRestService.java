package br.com.pedrogdf.simpleRestful.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.pedrogdf.simpleRestful.model.Product;
import br.com.pedrogdf.simpleRestful.repository.ProductRepository;

/**
 * Rest controller for {@link Product}
 * @author pedro
 *
 */
@CrossOrigin 
@RestController
@RequestMapping("/products")
public class ProductRestService { 
	@Autowired
	private ProductRepository productRepository;

	/**
	 * GET Method of all products
	 * @return List of all products
	 */
	@GetMapping
	public List<Product> getProducts() {
		List<Product> products = StreamSupport.stream(productRepository.findAll().spliterator(), false).collect(Collectors.toList());
		return products;
	}
	
	/** 
	 * GET method of a single {@link Product}
	 *  
	 * @param id - id of the {@link Product}
	 * @return {@link Product}
	 */
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable Long id){
		Product product = productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found."));
		return ResponseEntity.ok().body(product);
	}
	
	/**
	 * POST Method to create a product
	 * 
	 * @param product 
	 * @return the created product
	 */
	@PostMapping
	public Product saveProduct(@Valid @RequestBody Product product) {
		return productRepository.save(product);
	}
	
	/**
	 * PUT Method to update a product
	 * 
	 * @param product
	 * @return the updated product
	 */
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable Long id, @Valid @RequestBody Product product) {
		if (!productRepository.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found.");
		}
		return productRepository.save(product);
	}
	
	/**
	 * DELETE Method to delete a product
	 * 
	 * @param id - id of the {@link Product}
	 * @return HTTP OK with no body
	 */
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteProduct(@PathVariable Long id){
		if (!productRepository.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found.");
		}
		productRepository.deleteById(id);		
		return ResponseEntity.ok().build(); 
	}
}
