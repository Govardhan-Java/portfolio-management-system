package com.finance.controller;
import com.finance.entity.Investment;
import com.finance.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/investments")
    public List<Investment> getAllInvestments() {
        return portfolioService.getAllInvestments();
    }

    @PostMapping("/add")
    public Investment addInvestment(@RequestBody Investment investment) {
        return portfolioService.addInvestment(investment);
    }
}

