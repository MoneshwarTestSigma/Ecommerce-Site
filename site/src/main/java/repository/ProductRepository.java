package repository;

import entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findAllByNameLike(String name);
    List<Product> findAllByPriceBefore(Long price);
    List<Product> findAllByPriceAfter(Long price);
}
