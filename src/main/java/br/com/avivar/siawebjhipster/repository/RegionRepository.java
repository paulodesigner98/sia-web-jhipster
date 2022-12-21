package br.com.avivar.siawebjhipster.repository;

import br.com.avivar.siawebjhipster.domain.Region;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Region entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {}
