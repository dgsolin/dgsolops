#Version 1.0.1

## Numbering Structure
- Quotation QTN/19-20/#####
- Sales Order SO/19-20/#####
- Sales Invoice SI/19-20/##### & CN/19-20/##### for Sales Invoice and Credit Note
- Purchase Invoice PI/19-20/##### & DN/19-20/##### for Purchase Invoice and Debit Note
- Payment Entry REC/19-20/##### & PAY/19-20/##### & INT/19-20/##### for Receipt, Payment & Internal Transfer


## Features 
- Quotation
-- Added Custom field "System" Type Select Values DIPL | RC Services
-- Added Custom Script for filtering Items with Item Group = "System" if System != DIPL

- Sales Order
-- Added Custom field "System" Type Select Values DIPL | RC Services
-- Added Custom field "Order Ref" Type Data 
-- Added Custom Script for filtering Items with Item Group = "System" if System != DIPL

- Sales Invoice
-- Added Custom field "System" Type Select Values DIPL | RC Services
-- Added Custom field "Order Ref"
-- Added Custom field "Transaction Ref"
-- Added Custom field "Billing Ref"
-- Added Custom Script for filtering Items with Item Group = "System" if System != DIPL

- Purchase Invoice
-- Added Custom field "System" Type Select Values DIPL | RC Services
-- Added Custom field "Order Ref"
-- Added Custom field "Transaction Ref"
-- Added Custom Script for filtering Items with Item Group = "System" if System != DIPL

