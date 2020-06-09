package canteen.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.Order;

public interface OrderRepository extends PagingAndSortingRepository<Order, Long> {

    Page<Order> getOrderByStatus(String status, Pageable page);

    Order getById(Long id);
}
