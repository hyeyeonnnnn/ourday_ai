package com.ourday.api.service;

import com.ourday.api.model.Anniversary;
import java.util.List;

public interface AnniversaryService {
    List<Anniversary> getAnniversaries(Long coupleId);
    void addAnniversary(Anniversary anniversary);
}
