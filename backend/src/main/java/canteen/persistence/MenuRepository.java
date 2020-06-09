package canteen.persistence;

import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.Menu;

public interface MenuRepository extends PagingAndSortingRepository<Menu, Long> {
    Menu getById(Long id);
}
