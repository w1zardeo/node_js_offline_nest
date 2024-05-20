import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedWeight1715845543414 implements MigrationInterface {
    name='AddedWeight1715845543414';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "weight" numeric`);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "weight"`);
      }
    }
