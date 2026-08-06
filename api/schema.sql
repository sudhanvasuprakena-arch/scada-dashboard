CREATE TABLE dcs_milk_collection (
    id INT PRIMARY KEY AUTO_INCREMENT,
    collection_date DATE NOT NULL,
    shift_code VARCHAR(10) NOT NULL,
    dcs_code VARCHAR(50) NOT NULL,
    member_code VARCHAR(50) NOT NULL,
    milk DECIMAL(10, 2) NOT NULL,
    fat DECIMAL(5, 2) NOT NULL,
    snf DECIMAL(5, 2) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_collection_date (collection_date),
    INDEX idx_dcs_code (dcs_code),
    INDEX idx_month_year (YEAR(collection_date), MONTH(collection_date))
);
