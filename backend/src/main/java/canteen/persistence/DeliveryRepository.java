package canteen.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.DeliveryOrder;

public interface DeliveryRepository extends PagingAndSortingRepository<DeliveryOrder, Long> {


    Page<DeliveryOrder> getDeliveryOrdersByStatus( String status, Pageable page);

    DeliveryOrder getById(Long id);
}
