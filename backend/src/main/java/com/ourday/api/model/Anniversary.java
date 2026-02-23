package com.ourday.api.model;

import lombok.Data;
import java.time.LocalDate;

@Data
public class Anniversary {
    private Long anniversaryId;
    private Long coupleId;
    private String title;
    private LocalDate anniversaryDate;
    private String isRepeated;
    private String category;
}
