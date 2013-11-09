package org.mehdi.project.webapp.semantic;

import com.hp.hpl.jena.query.Query;
import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QueryFactory;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.query.ResultSetFormatter;

public class Ask_Dbpedia {

	public static void main(String[] args) {

		String s2 = "PREFIX  g: <http://www.w3.org/2003/01/geo/wgs84_pos#>\n"
				+ "PREFIX  rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"
				+ "PREFIX  onto: <http://dbpedia.org/ontology/>\n"
				+ "\n"
				+ "SELECT distinct ?Concept ?label \n" 
				+ "WHERE\n"
				+ "  { [] a ?Concept . \n"
				+ "    ?Concept rdfs:label ?label \n"
				+ "    FILTER regex(str(?label), \"logie\") \n"
				+ "  }\n" 
				+ "LIMIT 100\n" + "";

		Query query = QueryFactory.create(s2); // s2 = the query above
		QueryExecution qExe = QueryExecutionFactory.sparqlService(
				"http://dbpedia.org/sparql", query);
		ResultSet results = qExe.execSelect();
		ResultSetFormatter.out(System.out, results, query);

	}

}
