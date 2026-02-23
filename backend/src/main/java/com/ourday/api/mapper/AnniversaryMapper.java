package com.ourday.api.mapper;

import com.ourday.api.model.Anniversary;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface AnniversaryMapper {
    List<Anniversary> selectAllByCoupleId(Long coupleId);
    void insertAnniversary(Anniversary anniversary);
}
