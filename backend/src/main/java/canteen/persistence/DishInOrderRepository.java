package canteen.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import canteen.entity.implementations.DishInOrder;

public interface DishInOrderRepository extends JpaRepository<DishInOrder, Long> {
}
