import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUserRole1715845484267 implements MigrationInterface {
    name='AddedUserRole1715845484267';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "user" ADD "role" character varying NOT NULL DEFAULT 'USER'`,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
      }
    }
