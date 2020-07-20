package br.com.pedrogdf.simpleRestful.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * Entity representing Image
 * @author pedro
 *
 */
@Entity
public class ProductImage implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;

	@Lob
	private byte[] dataBlob;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public byte[] getDataBlob() {
		return dataBlob;
	}


	public void setDataBlob(byte[] dataBlob) {
		this.dataBlob = dataBlob;
	}

}
