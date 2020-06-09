package canteen.persistence;

import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.Product;

public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
}
