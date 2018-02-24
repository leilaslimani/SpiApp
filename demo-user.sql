DROP TABLE "DOSI"."DEMO_USERS";
DROP SEQUENCE "DOSI"."DEMO_USERS_SEQ";

--------------------------------------------------------
--  DDL for Sequence DEMO_USERS_SEQ
--------------------------------------------------------
CREATE SEQUENCE  "DOSI"."DEMO_USERS_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE ;

--------------------------------------------------------
--  DDL for Table DEMO_USERS
--------------------------------------------------------
  CREATE TABLE "DOSI"."DEMO_USERS" 
   (	"USER_ID" NUMBER, 
	"USER_NAME" VARCHAR2(100 BYTE), 
	"PASSWORD" VARCHAR2(4000 BYTE), 
	"CREATED_ON" DATE, 
	"QUOTA" NUMBER, 
	"PRODUCTS" CHAR(1 BYTE), 
	"EXPIRES_ON" DATE, 
	"ADMIN_USER" CHAR(1 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;

REM INSERTING into DOSI.DEMO_USERS
SET DEFINE OFF;
Insert into DOSI.DEMO_USERS (USER_ID,USER_NAME,PASSWORD,CREATED_ON,QUOTA,PRODUCTS,EXPIRES_ON,ADMIN_USER) values ('1','ADMIN','5FEB47F6C34EF4A6D6CBBD0B767ABFDF',to_date('04/02/16','DD/MM/RR'),null,'Y',null,'Y');
Insert into DOSI.DEMO_USERS (USER_ID,USER_NAME,PASSWORD,CREATED_ON,QUOTA,PRODUCTS,EXPIRES_ON,ADMIN_USER) values ('2','DEMO','713261F288D18855617EFC17CE81A148',to_date('04/02/16','DD/MM/RR'),'15000','Y',null,'N');


--------------------------------------------------------
--  DDL for Index DEMO_USERS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "DOSI"."DEMO_USERS_PK" ON "DOSI"."DEMO_USERS" ("USER_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;

--------------------------------------------------------
--  Constraints for Table DEMO_USERS
--------------------------------------------------------

  ALTER TABLE "DOSI"."DEMO_USERS" ADD CONSTRAINT "DEMO_USERS_PK" PRIMARY KEY ("USER_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;