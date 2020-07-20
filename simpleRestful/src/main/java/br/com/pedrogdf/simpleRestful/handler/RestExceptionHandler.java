package br.com.pedrogdf.simpleRestful.handler;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * ExcetionHandler to better present error as a REST response.
 * 
 * @author pedro
 *
 */
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ex.printStackTrace();
		return super.handleHttpMessageNotReadable(ex, headers, status, request);
	}
	
	/**
	 * Handle {@link ResponseStatusException}
	 */
	@ExceptionHandler(value = ResponseStatusException.class)
	protected ResponseEntity<Object> ResponseStatusException(ResponseStatusException ex, WebRequest request){
		return new ResponseEntity<Object>(ex.getReason(),ex.getStatus());
	}
	
	/**
	 * Handle {@link MethodArgumentNotValidException}
	 */
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		
		return new ResponseEntity<Object>(errors, new HttpHeaders(), HttpStatus.NOT_ACCEPTABLE);
	}
	
}
