package com.example.LibraryMangement.repository;

import com.example.LibraryMangement.entity.BorrowRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BorrowRecordRepository extends JpaRepository<BorrowRecord, Long> {
    List<BorrowRecord> findByReturnDateIsNull();
    List<BorrowRecord> findByDueDateBeforeAndReturnDateIsNull(LocalDate date);
}
