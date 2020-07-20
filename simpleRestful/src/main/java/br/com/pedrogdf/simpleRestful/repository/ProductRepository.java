package br.com.pedrogdf.simpleRestful.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.pedrogdf.simpleRestful.model.Product;

/**
 * Repository to access {@link Product}
 * @author pedro
 *
 */
public interface ProductRepository extends CrudRepository<Product, Long>, PagingAndSortingRepository<Product, Long>{

}
