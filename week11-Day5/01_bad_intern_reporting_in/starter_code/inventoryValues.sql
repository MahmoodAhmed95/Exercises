

-- Inventory Value
SELECT 
	store.store_id as store_id,
	address.address,
	address.address2,
	city.city,
	address.postal_code,
	sum(film.replacement_cost) as inventory_value
FROM 
	inventory
	LEFT JOIN store ON inventory.store_id = store.store_id
	LEFT JOIN film ON inventory.film_id = film.film_id
	LEFT JOIN address ON store.address_id = address.address_id
	LEFT JOIN city ON address.city_id = city.city_id
GROUP BY address.address_id, store.store_id, city.city,address.postal_code;

-- Replacement Costs by Actor
SELECT 
	sum(film.replacement_cost) as replacementCosts,
    COUNT(film_actor.film_id) as films,
	CONCAT(actor.first_name, ' ', actor.last_name) AS full_name
    
FROM film_actor
    LEFT JOIN actor ON film_actor.actor_id = actor.actor_id
    LEFT JOIN film ON film_actor.film_id = film.film_id
GROUP BY actor.actor_id  
ORDER BY replacementCosts DESC;

