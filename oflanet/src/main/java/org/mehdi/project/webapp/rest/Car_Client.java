package org.mehdi.project.webapp.rest;

import java.net.URI;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriBuilder;


import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.api.representation.Form;

public class Car_Client {

	private static URI getBaseURI() {
		return UriBuilder.fromUri("http://mehdi-gae-datastore.appspot.com")
				.build();
	}
	
	public static String sayHello() {

		ClientConfig config = new DefaultClientConfig();
		Client client = Client.create(config);
		WebResource service = client.resource(getBaseURI());

		// The HTML
		return (service.path("webresources").path("myresource").path("1")
				.accept(MediaType.APPLICATION_JSON).get(String.class));

	}

	public static String getCar() {

		ClientConfig config = new DefaultClientConfig();
		Client client = Client.create(config);
		WebResource service = client.resource(getBaseURI());

		// The HTML
		return (service.path("webresources").path("myresource").path("10")
				.accept(MediaType.APPLICATION_JSON).get(String.class));

	}

	public static String addCar(long id, String License, int color) {

		Form form = new Form();
		form.add("id", id);
		form.add("license", License);
		form.add("color", color);

		ClientConfig config = new DefaultClientConfig();
		Client client = Client.create(config);
		WebResource service = client.resource(getBaseURI());

		ClientResponse response = service.path("webresources")
				.path("myresource").path("post").type(MediaType.TEXT_PLAIN)
				.post(ClientResponse.class, form);

		return response.toString();

	}
}
