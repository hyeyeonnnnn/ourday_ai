package com.ourday.api.controller;

import com.ourday.api.model.Anniversary;
import com.ourday.api.service.AnniversaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/anniversaries")
@RequiredArgsConstructor
public class AnniversaryController {

    private final AnniversaryService anniversaryService;

    @GetMapping("/{coupleId}")
    public List<Anniversary> getAnniversaries(@PathVariable Long coupleId) {
        return anniversaryService.getAnniversaries(coupleId);
    }

    @PostMapping
    public void addAnniversary(@RequestBody Anniversary anniversary) {
        anniversaryService.addAnniversary(anniversary);
    }
}
