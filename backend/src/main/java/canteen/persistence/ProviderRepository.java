package canteen.persistence;


import org.springframework.data.repository.PagingAndSortingRepository;
import canteen.entity.implementations.Provider;

public interface ProviderRepository extends PagingAndSortingRepository<Provider, Long> {
}
