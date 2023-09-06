-- Most prolific actors
SELECT 
	COUNT(film_actor.film_id) AS films,
    CONCAT(actor.first_name, ' ', actor.last_name) AS actorName
    
FROM actor
    LEFT JOIN film_actor ON actor.actor_id = film_actor.actor_id
GROUP BY actor.actor_id, actorName
ORDER BY films DESC;


-- Revenue by Actor For The Month of June 2022
SELECT 
	actor.actor_id,
	CONCAT(actor.first_name, ' ', actor.last_name) as name,
	SUM(film_revenue.total_revenue) as total_revenue
	FROM film_actor
	LEFT JOIN (
		SELECT 
			inventory.film_id,
			SUM(payment.amount) as total_revenue
		FROM payment
			INNER JOIN rental ON payment.rental_id = rental.rental_id
			INNER JOIN inventory ON rental.inventory_id = rental.inventory_id
			WHERE payment_date >= '2022-6-01' AND payment_date <'2022-7-01'
		GROUP BY 
			inventory.film_id
		
	) as film_revenue ON film_actor.film_id = film_revenue.film_id
	LEFT JOIN actor ON film_actor.actor_id = actor.actor_id
GROUP BY actor.actor_id
ORDER BY actor.actor_id ASC ;
