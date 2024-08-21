package com.finance.service;

import com.finance.entity.Investment;
import com.finance.repository.InvestmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    @Autowired
    private InvestmentRepository investmentRepository;

    public List<Investment> getAllInvestments() {
        return investmentRepository.findAll();
    }

    public Investment addInvestment(Investment investment) {
        return investmentRepository.save(investment);
    }
}
