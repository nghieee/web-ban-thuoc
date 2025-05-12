CREATE DATABASE LongChauDB;
GO

USE LongChauDB;
GO

CREATE TABLE Users (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    FullName NVARCHAR(255),
    Email NVARCHAR(255),
    PhoneNumber NVARCHAR(20),
    Address NVARCHAR(500),
    Role NVARCHAR(50) DEFAULT 'Customer',
    CreatedDate DATETIME DEFAULT GETDATE(),
    IsActive BIT DEFAULT 1
);

CREATE TABLE Categories (
    CategoryId INT PRIMARY KEY IDENTITY(1,1),
    CategoryName NVARCHAR(255) NOT NULL,
    Description NVARCHAR(1000),
    ImageUrl NVARCHAR(255)
);

CREATE TABLE Products (
    ProductId INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(255) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(18, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    CategoryId INT,
    ImageUrl NVARCHAR(255),
    CreatedDate DATETIME DEFAULT GETDATE(),
    IsActive BIT DEFAULT 1,
    FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId)
);

CREATE TABLE Orders (
    OrderId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT,
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(18,2),
    Status NVARCHAR(50) DEFAULT 'Pending',
    ShippingAddress NVARCHAR(500),
    PaymentStatus NVARCHAR(50) DEFAULT 'Unpaid',
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

CREATE TABLE OrderItems (
    OrderItemId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT,
    ProductId INT,
    Quantity INT NOT NULL,
    Price DECIMAL(18,2) NOT NULL,
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);

CREATE TABLE Payments (
    PaymentId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT,
    PaymentMethod NVARCHAR(50),
    Amount DECIMAL(18,2),
    PaymentDate DATETIME DEFAULT GETDATE(),
    PaymentStatus NVARCHAR(50),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
);

CREATE TABLE Reviews (
    ReviewId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT,
    ProductId INT,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    Comment NVARCHAR(MAX),
    ReviewDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);

CREATE TABLE InventoryTransactions (
    TransactionId INT PRIMARY KEY IDENTITY(1,1),
    ProductId INT,
    QuantityChange INT,
    TransactionType NVARCHAR(50), -- Nhập hàng, Xuất hàng
    TransactionDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);


