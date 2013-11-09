package org.mehdi.project.webapp.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


/**
 * Example resource class hosted at the URI path "/myresource"
 */
@Path("/myresource")
public class CarFacade {

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String displayCar() {
		return Car_Client.getCar();
	}
	
/*	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Car createCar(Car car) {
		Car_Client.addCar(car.getId(), car.getLicense(), car.getColor());
        return car;
    } */

}
