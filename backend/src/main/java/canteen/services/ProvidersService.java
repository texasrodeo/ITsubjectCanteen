package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.Provider;
import canteen.persistence.ProviderRepository;

@Service
public class ProvidersService {
    ProviderRepository productRepository;

    @Autowired
    public ProvidersService(ProviderRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Provider> getAllProviders(Pageable pageable){
        return productRepository.findAll(pageable);
    }

    public boolean addProvider(String name, String phone) {
        Provider p = new Provider(name, phone);
        productRepository.save(p);
        return true;
    }

    public Iterable<Provider> findAll() {
        return productRepository.findAll();
    }
}
