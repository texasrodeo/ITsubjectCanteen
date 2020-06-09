package canteen.persistence;

import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.Dish;

public interface DishesRepository extends PagingAndSortingRepository<Dish, Long> {

    Dish getById(Long id);
}
