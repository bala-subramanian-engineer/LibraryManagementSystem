package com.example.LibraryMangement.controller;

import com.example.LibraryMangement.entity.BorrowRecord;
import com.example.LibraryMangement.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/borrow")
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    @PostMapping("/{bookId}/{memberId}")
    public BorrowRecord borrowBook(
        @PathVariable Long bookId,
        @PathVariable Long memberId
    ) {
        return borrowService.borrowBook(bookId, memberId);
    }

    @PostMapping("/return/{recordId}")
    public BorrowRecord returnBook(@PathVariable Long recordId) {
        return borrowService.returnBook(recordId);
    }

    @GetMapping("/overdue")
    public List<BorrowRecord> getOverdueBooks() {
        return borrowService.getOverdueBooks();
    }
}