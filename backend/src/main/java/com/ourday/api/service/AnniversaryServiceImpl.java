package com.ourday.api.service;

import com.ourday.api.mapper.AnniversaryMapper;
import com.ourday.api.model.Anniversary;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnniversaryServiceImpl implements AnniversaryService {

    private final AnniversaryMapper anniversaryMapper;

    @Override
    public List<Anniversary> getAnniversaries(Long coupleId) {
        return anniversaryMapper.selectAllByCoupleId(coupleId);
    }

    @Override
    public void addAnniversary(Anniversary anniversary) {
        anniversaryMapper.insertAnniversary(anniversary);
    }
}
